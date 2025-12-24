import React from 'react';

const MultimodalInteraction = () => {
  return (
    <div style={{ padding: '20px', background: '#000', minHeight: '100vh' }}>
      <h1 style={{ color: '#fff', fontSize: '2rem', marginBottom: '20px' }}>多模态交互</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* 输入区域 */}
        <div style={{ background: '#141414', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>输入</h2>
          
          {/* 文本输入 */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#fff', marginBottom: '10px', fontSize: '16px' }}>文本问答</h3>
            <textarea 
              style={{
                width: '100%',
                height: '120px',
                padding: '12px',
                background: '#1a1a1a',
                color: '#fff',
                border: '1px solid #333',
                borderRadius: '4px',
                resize: 'vertical',
                fontSize: '14px'
              }}
              placeholder="请输入您的问题或描述..."
            ></textarea>
          </div>
          
          {/* 语音输入 */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ color: '#fff', marginBottom: '10px', fontSize: '16px' }}>语音输入</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{ 
                padding: '10px 20px', 
                backgroundColor: '#e50914', 
                color: '#fff', 
                border: 'none', 
                borderRadius: '4px', 
                cursor: 'pointer'
              }}>
                开始录音
              </button>
              <button style={{ 
                padding: '10px 20px', 
                backgroundColor: '#333', 
                color: '#fff', 
                border: 'none', 
                borderRadius: '4px', 
                cursor: 'pointer'
              }}>
                停止录音
              </button>
            </div>
          </div>
          
          {/* 提交按钮 */}
          <button style={{ 
            width: '100%',
            padding: '12px 0', 
            backgroundColor: '#e50914', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600'
          }}>
            发送
          </button>
        </div>
        
        {/* 输出区域 */}
        <div style={{ background: '#141414', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ color: '#fff', marginBottom: '20px' }}>输出结果</h2>
          
          <div style={{ background: '#1a1a1a', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
            <h3 style={{ color: '#fff', marginBottom: '10px', fontSize: '16px' }}>文本输出</h3>
            <p style={{ color: '#b3b3b3' }}>这里将显示模型返回的文本结果...</p>
          </div>
          
          <div style={{ background: '#1a1a1a', padding: '15px', borderRadius: '8px' }}>
            <h3 style={{ color: '#fff', marginBottom: '10px', fontSize: '16px' }}>多媒体输出</h3>
            <div style={{ height: '200px', background: '#222', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: '#666' }}>多媒体展示区域</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultimodalInteraction;