import React from 'react';

const HistoryAlerts = () => {
  return (
    <div style={{ padding: '20px', background: '#000', minHeight: '100vh' }}>
      <h1 style={{ color: '#fff', fontSize: '2rem', marginBottom: '20px' }}>历史告警</h1>
      <div style={{ background: '#141414', padding: '20px', borderRadius: '8px' }}>
        <h2 style={{ color: '#fff', marginBottom: '20px' }}>告警统计</h2>
        
        <div style={{ marginBottom: '30px', height: '300px', background: '#1a1a1a', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: '#b3b3b3' }}>图表展示区域 - 告警等级分布</p>
        </div>
        
        <h2 style={{ color: '#fff', marginBottom: '20px' }}>告警列表</h2>
        <div style={{ background: '#1a1a1a', borderRadius: '8px', overflow: 'hidden' }}>
          {/* 这里将放置告警列表 */}
          <div style={{ padding: '15px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ color: '#fff', marginBottom: '5px' }}>烟雾检测告警</h3>
              <p style={{ color: '#b3b3b3', fontSize: '14px' }}>2025-12-24 10:30:00</p>
            </div>
            <div style={{ color: '#f87171', fontWeight: 'bold' }}>告警</div>
          </div>
          
          <div style={{ padding: '15px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ color: '#fff', marginBottom: '5px' }}>温度异常提示</h3>
              <p style={{ color: '#b3b3b3', fontSize: '14px' }}>2025-12-24 09:15:00</p>
            </div>
            <div style={{ color: '#fbbf24', fontWeight: 'bold' }}>警告</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryAlerts;