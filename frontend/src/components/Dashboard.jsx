import React from 'react';

const Dashboard = () => {
  return (
    <div style={{ padding: '20px', background: '#000', minHeight: '100vh' }}>
      <h1 style={{ color: '#fff', fontSize: '2rem', marginBottom: '20px' }}>消防报警仪表盘</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {/* 这里将放置仪表盘卡片 */}
        <div style={{ background: '#141414', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ color: '#fff', marginBottom: '10px' }}>实时状态</h2>
          <p style={{ color: '#b3b3b3' }}>系统正常运行中</p>
        </div>
        <div style={{ background: '#141414', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ color: '#fff', marginBottom: '10px' }}>预警等级</h2>
          <p style={{ color: '#4ade80' }}>当前等级：安全</p>
        </div>
        <div style={{ background: '#141414', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ color: '#fff', marginBottom: '10px' }}>今日告警</h2>
          <p style={{ color: '#f87171' }}>0 次</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;