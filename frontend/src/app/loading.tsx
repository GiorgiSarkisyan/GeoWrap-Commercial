"use client";
export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#212020',
      color: '#fff',
      fontSize: '24px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
      }}>
        <div className="spinner" />
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            .spinner {
              width: 50px;
              height: 50px;
              border: 3px solid rgba(255, 255, 255, 0.3);
              border-top: 3px solid #fff;
              border-radius: 50%;
              margin: 0 auto 20px;
              animation: spin 1s linear infinite;
            }
          `
        }} />
        Loading...
      </div>
    </div>
  );
}
