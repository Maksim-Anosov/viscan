import { Skeleton } from 'antd';

export default function Loading() {
  return (
    <div style={{ width: '80%', margin: '20px auto' }}>
      <Skeleton active paragraph={{ rows: 6 }} />
    </div>
  );
}