import { Skeleton } from 'antd';

export default function Loading() {
  return (
    <div style={{ 
      padding: '24px',
      height: '100vh',
    }}>
      <Skeleton 
        active 
        paragraph={{ rows: 10 }} 
        className="ant-skeleton" 
      />
    </div>
  );
}