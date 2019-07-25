import { useState, useEffect } from 'react';
import Client from '../../services/Client';
import { LoginRequest } from '../../proto/services_pb';

function useService(_request: Promise<boolean>) {
  const [data, setData] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await Client.login(new LoginRequest());
        setData(result.toObject().accesstoken);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return [data, isLoading, isError];
}
export default useService;
