import { useLocation } from 'react-router-dom';

export default function NotFound() {
    const location = useLocation();
    console.log('Unmatched URL:', location.pathname);
    console.log('No matching route found for:', window.location.pathname);

    return (
      <div>
        <h1>404 Not Found</h1>
        <p>The requested URL was not found: {location.pathname}</p>
        console.log('No matching route found for:', window.location.pathname);

      </div>
    );
  }
  