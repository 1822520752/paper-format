// 全局状态管理
const AppState = {
  currentFile: null,
  currentFileId: null,
  checkReport: null,
  formattedFileId: null,
  currentConfig: null,
  templates: []
};

// API 基础路径
const API_BASE = '/api';

// 工具函数：格式化文件大小
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// 工具函数：显示通知消息
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 z-50 px-6 py-4 rounded-xl shadow-lg transition-all duration-300 transform translate-x-0 ${
    type === 'success' ? 'bg-green-500 text-white' : 
    type === 'error' ? 'bg-red-500 text-white' : 
    'bg-blue-500 text-white'
  }`;
  notification.innerHTML = `
    <div class="flex items-center gap-3">
      <span class="text-lg">${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
      <span>${message}</span>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// 工具函数：显示加载状态
function showLoading(element, isLoading) {
  const btn = element;
  if (isLoading) {
    btn.disabled = true;
    btn.dataset.originalText = btn.innerHTML;
    btn.innerHTML = `
      <span class="flex items-center gap-2">
        <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>处理中...</span>
      </span>
    `;
  } else {
    btn.disabled = false;
    if (btn.dataset.originalText) {
      btn.innerHTML = btn.dataset.originalText;
    }
  }
}

// 初始化页面
document.addEventListener('DOMContentLoaded', async () => {
  initUploadZone();
  initTemplateSelector();
  initAdvancedSettings();
  initActionButtons();
  await loadTemplates();
  showWelcomeGuide();
});

// 初始化上传区域
function initUploadZone() {
  const uploadZone = document.getElementById('uploadZone');
  const fileInput = document.getElementById('fileInput');
  
  uploadZone.addEventListener('click', () => {
    fileInput.click();
  });
  
  uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('border-blue-500', 'bg-blue-50');
  });
  
  uploadZone.addEventListener('dragleave', () => {
    uploadZone.classList.remove('border-blue-500', 'bg-blue-50');
  });
  
  uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('border-blue-500', 'bg-blue-50');
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  });
  
  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleFileSelect(e.target.files[0]);
    }
  });
}

// 处理文件选择
async function handleFileSelect(file) {
  if (!file.name.endsWith('.docx')) {
    showNotification('仅支持.docx格式文件', 'error');
    return;
  }
  
  if (file.size > 20 * 1024 * 1024) {
    showNotification('文件大小超过20MB限制', 'error');
    return;
  }
  
  AppState.currentFile = file;
  
  displayFileInfo(file);
  
  await uploadFile(file);
}

// 显示文件信息
function displayFileInfo(file) {
  const uploadZone = document.getElementById('uploadZone');
  uploadZone.innerHTML = `
    <div class="bg-white bg-opacity-80 rounded-xl p-4 border border-purple-200">
      <div class="flex items-center gap-4">
        <div class="flex-shrink-0">
          <svg class="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"></path>
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate">${file.name}</p>
          <p class="text-sm text-gray-500">${formatFileSize(file.size)}</p>
        </div>
        <button onclick="removeFile()" class="flex-shrink-0 text-red-500 hover:text-red-700 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  `;
}

// 移除文件
function removeFile() {
  AppState.currentFile = null;
  AppState.currentFileId = null;
  AppState.checkReport = null;
  AppState.formattedFileId = null;
  
  const uploadZone = document.getElementById('uploadZone');
  uploadZone.innerHTML = `
    <div class="text-center">
      <svg class="w-16 h-16 mx-auto mb-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
      </svg>
      <p class="text-lg font-medium text-gray-700 mb-2">拖拽文件到这里，或点击上传</p>
      <p class="text-sm text-gray-500">支持 .docx 格式，最大 20MB</p>
    </div>
  `;
  
  clearResults();
}

// 上传文件到服务器
async function uploadFile(file) {
  const formData = new FormData();
  formData.append('file', file);
  
  try {
    showNotification('正在上传文件...', 'info');
    
    const response = await fetch(`${API_BASE}/upload`, {
      method: 'POST',
      body: formData
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || '上传失败');
    }
    
    const data = await response.json();
    AppState.currentFileId = data.file_id;
    
    showNotification('文件上传成功', 'success');
    
    document.getElementById('checkBtn').disabled = false;
    document.getElementById('formatBtn').disabled = false;
  } catch (error) {
    showNotification(`上传失败: ${error.message}`, 'error');
    removeFile();
  }
}

// 初始化模板选择器
function initTemplateSelector() {
  const templateSelect = document.getElementById('templateSelect');
  
  templateSelect.addEventListener('change', (e) => {
    const templateName = e.target.value;
    loadTemplateConfig(templateName);
  });
}

// 加载模板列表
async function loadTemplates() {
  try {
    const response = await fetch(`${API_BASE}/templates`);
    if (!response.ok) throw new Error('加载模板失败');
    
    const data = await response.json();
    AppState.templates = data.templates;
    
    const templateSelect = document.getElementById('templateSelect');
    templateSelect.innerHTML = data.templates.map(t => 
      `<option value="${t.name}" ${t.name === data.default ? 'selected' : ''}>${t.name}</option>`
    ).join('');
    
    loadTemplateConfig(data.default);
  } catch (error) {
    console.error('加载模板失败:', error);
  }
}

// 加载模板配置
function loadTemplateConfig(templateName) {
  const template = AppState.templates.find(t => t.name === templateName);
  if (template) {
    AppState.currentConfig = template.config;
  }
}

// 初始化高级设置
function initAdvancedSettings() {
  const toggleBtn = document.getElementById('advancedToggle');
  const panel = document.getElementById('advancedPanel');
  const icon = document.getElementById('advancedIcon');
  
  toggleBtn.addEventListener('click', () => {
    const isOpen = panel.classList.contains('max-h-0');
    
    if (isOpen) {
      panel.classList.remove('max-h-0');
      panel.classList.add('max-h-[800px]');
      icon.style.transform = 'rotate(180deg)';
    } else {
      panel.classList.add('max-h-0');
      panel.classList.remove('max-h-[800px]');
      icon.style.transform = 'rotate(0deg)';
    }
  });
}

// 初始化操作按钮
function initActionButtons() {
  document.getElementById('checkBtn').addEventListener('click', checkFormat);
  document.getElementById('formatBtn').addEventListener('click', formatDocument);
  document.getElementById('exportConfigBtn').addEventListener('click', exportConfig);
  document.getElementById('importConfigBtn').addEventListener('click', importConfig);
}

// 格式检查
async function checkFormat() {
  if (!AppState.currentFileId) {
    showNotification('请先上传文件', 'error');
    return;
  }
  
  const checkBtn = document.getElementById('checkBtn');
  showLoading(checkBtn, true);
  
  try {
    const response = await fetch(`${API_BASE}/check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        file_id: AppState.currentFileId,
        format_config: getCustomConfig()
      })
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || '检查失败');
    }
    
    const report = await response.json();
    AppState.checkReport = report;
    
    displayCheckReport(report);
    showNotification('格式检查完成', 'success');
  } catch (error) {
    showNotification(`检查失败: ${error.message}`, 'error');
  } finally {
    showLoading(checkBtn, false);
  }
}

// 显示检查报告
function displayCheckReport(report) {
  const resultArea = document.getElementById('resultArea');
  
  const progressValue = report.pass_rate || 0;
  
  const groupedItems = {};
  report.items.forEach(item => {
    if (!groupedItems[item.category]) {
      groupedItems[item.category] = [];
    }
    groupedItems[item.category].push(item);
  });
  
  resultArea.innerHTML = `
    <div class="animate-fadeIn">
      <div class="text-center mb-8">
        <div class="relative inline-block">
          <svg class="w-40 h-40 transform -rotate-90">
            <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(99, 102, 241, 0.1)" stroke-width="12"></circle>
            <circle cx="80" cy="80" r="70" fill="none" stroke="url(#gradient)" stroke-width="12" 
                    stroke-dasharray="${2 * Math.PI * 70}" 
                    stroke-dashoffset="${2 * Math.PI * 70 * (1 - progressValue / 100)}"
                    stroke-linecap="round"
                    class="transition-all duration-1000 ease-out"></circle>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#6366F1;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:1" />
              </linearGradient>
            </defs>
          </svg>
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              ${progressValue}%
            </span>
          </div>
        </div>
        <p class="text-gray-600 mt-4">格式合格率</p>
        <div class="flex justify-center gap-6 mt-4 text-sm">
          <span class="text-green-600">✓ ${report.passed_items} 项合格</span>
          <span class="text-red-600">✕ ${report.failed_items} 项不合格</span>
        </div>
      </div>
      
      <div class="space-y-3">
        ${Object.entries(groupedItems).map(([category, items]) => `
          <div class="bg-white bg-opacity-60 rounded-xl overflow-hidden border border-purple-100">
            <button onclick="toggleCategory(this)" class="w-full px-5 py-4 flex items-center justify-between hover:bg-purple-50 transition-colors">
              <div class="flex items-center gap-3">
                <span class="font-medium text-gray-800">${category}</span>
                <span class="text-xs px-2 py-1 rounded-full ${items.every(i => i.passed) ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}">
                  ${items.filter(i => i.passed).length}/${items.length}
                </span>
              </div>
              <svg class="w-5 h-5 text-gray-400 transition-transform duration-300 category-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="category-content max-h-0 overflow-hidden transition-all duration-300">
              <div class="px-5 pb-4 space-y-2">
                ${items.map(item => `
                  <div class="flex items-start gap-3 p-3 rounded-lg ${item.passed ? 'bg-green-50' : 'bg-red-50'}">
                    <span class="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${item.passed ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}">
                      ${item.passed ? '✓' : '✕'}
                    </span>
                    <div class="flex-1 min-w-0">
                      <p class="font-medium text-gray-800 text-sm">${item.name}</p>
                      ${!item.passed ? `
                        <p class="text-xs text-gray-600 mt-1">
                          当前: <span class="font-mono">${item.current}</span> → 
                          应为: <span class="font-mono">${item.expected}</span>
                        </p>
                        ${item.suggestion ? `<p class="text-xs text-blue-600 mt-1">💡 ${item.suggestion}</p>` : ''}
                      ` : ''}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 切换分类展开/收起
function toggleCategory(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('.category-icon');
  
  if (content.classList.contains('max-h-0')) {
    content.classList.remove('max-h-0');
    content.classList.add('max-h-[1000px]');
    icon.style.transform = 'rotate(180deg)';
  } else {
    content.classList.add('max-h-0');
    content.classList.remove('max-h-[1000px]');
    icon.style.transform = 'rotate(0deg)';
  }
}

// 一键排版
async function formatDocument() {
  if (!AppState.currentFileId) {
    showNotification('请先上传文件', 'error');
    return;
  }
  
  const formatBtn = document.getElementById('formatBtn');
  showLoading(formatBtn, true);
  
  try {
    const response = await fetch(`${API_BASE}/format`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        file_id: AppState.currentFileId,
        format_config: getCustomConfig()
      })
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || '排版失败');
    }
    
    const data = await response.json();
    AppState.formattedFileId = data.formatted_file_id;
    
    displayFormatSuccess(data);
    showNotification('排版完成', 'success');
  } catch (error) {
    showNotification(`排版失败: ${error.message}`, 'error');
  } finally {
    showLoading(formatBtn, false);
  }
}

// 显示排版成功
function displayFormatSuccess(data) {
  const resultArea = document.getElementById('resultArea');
  
  resultArea.innerHTML = `
    <div class="text-center animate-bounceIn">
      <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center shadow-lg">
        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      
      <h3 class="text-2xl font-bold text-gray-800 mb-2">排版完成！</h3>
      <p class="text-gray-600 mb-6">您的论文已按照规范格式排版完成</p>
      
      <div class="bg-white bg-opacity-80 rounded-xl p-6 mb-6 border border-green-200">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <svg class="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"></path>
            </svg>
            <div class="text-left">
              <p class="font-medium text-gray-800">${data.filename}</p>
              <p class="text-sm text-gray-500">已排版文档</p>
            </div>
          </div>
        </div>
        
        <button onclick="downloadFormattedFile()" class="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
          <span class="flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            <span>下载排版后文档</span>
          </span>
        </button>
      </div>
      
      <div class="grid grid-cols-2 gap-4 text-sm">
        <div class="bg-purple-50 rounded-lg p-4">
          <p class="text-purple-600 font-medium mb-1">✓ 页面设置</p>
          <p class="text-gray-600">已调整页边距</p>
        </div>
        <div class="bg-purple-50 rounded-lg p-4">
          <p class="text-purple-600 font-medium mb-1">✓ 标题格式</p>
          <p class="text-gray-600">已统一各级标题</p>
        </div>
        <div class="bg-purple-50 rounded-lg p-4">
          <p class="text-purple-600 font-medium mb-1">✓ 正文排版</p>
          <p class="text-gray-600">已设置行距缩进</p>
        </div>
        <div class="bg-purple-50 rounded-lg p-4">
          <p class="text-purple-600 font-medium mb-1">✓ 页眉页脚</p>
          <p class="text-gray-600">已添加页码</p>
        </div>
      </div>
    </div>
  `;
}

// 下载排版后的文件
function downloadFormattedFile() {
  if (!AppState.formattedFileId) {
    showNotification('没有可下载的文件', 'error');
    return;
  }
  
  window.location.href = `${API_BASE}/download/${AppState.formattedFileId}`;
  showNotification('正在下载...', 'info');
}

// 获取自定义配置
function getCustomConfig() {
  const config = AppState.currentConfig || {};
  
  const topMargin = document.getElementById('topMargin')?.value;
  const bottomMargin = document.getElementById('bottomMargin')?.value;
  const leftMargin = document.getElementById('leftMargin')?.value;
  const rightMargin = document.getElementById('rightMargin')?.value;
  
  if (topMargin || bottomMargin || leftMargin || rightMargin) {
    config.page_settings = config.page_settings || {};
    if (topMargin) config.page_settings.top_margin = parseFloat(topMargin);
    if (bottomMargin) config.page_settings.bottom_margin = parseFloat(bottomMargin);
    if (leftMargin) config.page_settings.left_margin = parseFloat(leftMargin);
    if (rightMargin) config.page_settings.right_margin = parseFloat(rightMargin);
  }
  
  return config;
}

// 导出配置
async function exportConfig() {
  try {
    const config = getCustomConfig();
    
    const response = await fetch(`${API_BASE}/export-config`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ config })
    });
    
    if (!response.ok) throw new Error('导出失败');
    
    const data = await response.json();
    
    const blob = new Blob([data.config_json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '论文格式配置.json';
    a.click();
    URL.revokeObjectURL(url);
    
    showNotification('配置已导出', 'success');
  } catch (error) {
    showNotification(`导出失败: ${error.message}`, 'error');
  }
}

// 导入配置
function importConfig() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  
  input.onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    try {
      const text = await file.text();
      
      const response = await fetch(`${API_BASE}/import-config`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ config_json: text })
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || '导入失败');
      }
      
      const data = await response.json();
      AppState.currentConfig = data.config;
      
      showNotification('配置已导入', 'success');
    } catch (error) {
      showNotification(`导入失败: ${error.message}`, 'error');
    }
  };
  
  input.click();
}

// 清空结果区域
function clearResults() {
  const resultArea = document.getElementById('resultArea');
  resultArea.innerHTML = `
    <div class="text-center py-16">
      <svg class="w-24 h-24 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
      <p class="text-gray-400 text-lg">上传文档后，这里将显示检查结果</p>
    </div>
  `;
}

// 显示欢迎引导
function showWelcomeGuide() {
  const resultArea = document.getElementById('resultArea');
  resultArea.innerHTML = `
    <div class="text-center py-12">
      <div class="mb-8">
        <div class="inline-block p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl mb-4">
          <svg class="w-16 h-16 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-gray-800 mb-2">开始使用论文格</h3>
        <p class="text-gray-600">三步完成论文格式规范化</p>
      </div>
      
      <div class="max-w-2xl mx-auto space-y-6 text-left">
        <div class="flex gap-4 items-start">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-center font-bold shadow-lg">1</div>
          <div class="flex-1">
            <h4 class="font-semibold text-gray-800 mb-1">上传论文文档</h4>
            <p class="text-sm text-gray-600">支持 .docx 格式，最大 20MB</p>
          </div>
        </div>
        
        <div class="flex gap-4 items-start">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-center font-bold shadow-lg">2</div>
          <div class="flex-1">
            <h4 class="font-semibold text-gray-800 mb-1">检查格式问题</h4>
            <p class="text-sm text-gray-600">系统自动检查 15+ 项格式规范</p>
          </div>
        </div>
        
        <div class="flex gap-4 items-start">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-center font-bold shadow-lg">3</div>
          <div class="flex-1">
            <h4 class="font-semibold text-gray-800 mb-1">一键自动排版</h4>
            <p class="text-sm text-gray-600">下载符合规范的排版后文档</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// FAQ 手风琴
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');
    
    question.addEventListener('click', () => {
      const isOpen = !answer.classList.contains('hidden');
      
      if (isOpen) {
        answer.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
      } else {
        answer.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });
}

setTimeout(initFAQ, 100);