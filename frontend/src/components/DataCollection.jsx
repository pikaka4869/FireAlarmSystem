import React from 'react';

const DataCollection = () => {
  return (
    <div style={{ padding: '20px', background: '#000', minHeight: '100vh' }}>
      <h1 style={{ color: '#fff', fontSize: '2rem', marginBottom: '20px' }}>数据采集</h1>
      <div style={{ background: '#141414', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ color: '#fff', marginBottom: '10px' }}>多模态数据采集</h2>
        <p style={{ color: '#b3b3b3', marginBottom: '20px' }}>支持图片、视频上传和实时采集</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div style={{ background: '#1a1a1a', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', marginBottom: '15px' }}>图片上传</h3>
            <button style={{ 
              padding: '10px 20px', 
              backgroundColor: '#e50914', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer'
            }}>
              选择图片
            </button>
          </div>
          
          <div style={{ background: '#1a1a1a', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', marginBottom: '15px' }}>视频上传</h3>
            <button style={{ 
              padding: '10px 20px', 
              backgroundColor: '#e50914', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer'
            }}>
              选择视频
            </button>
          </div>
          
          <div style={{ background: '#1a1a1a', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', marginBottom: '15px' }}>实时采集</h3>
            <button style={{ 
              padding: '10px 20px', 
              backgroundColor: '#e50914', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer'
            }}>
              启动摄像头
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCollection;