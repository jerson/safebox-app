import { useEffect, useState } from 'react';
import { GeolocationReturnType } from 'react-native';
import Emitter from '../../modules/listener/Emitter';
import {
  HasProductRequest,
  SendLocationRequest
} from '../../proto/services_pb';
import Client from '../../services/Client';
import Log from '../../modules/log/Log';

const TAG = '[TAG]';
function LocationManager() {
  const [enabled, setEnabled] = useState(false);
  const [watchID, setWatchId] = useState(0);

  const options = {
    enableHighAccuracy: true,
    timeout: 30000,
    maximumAge: 1000
  };

  useEffect(() => {
    const callback = (isPurchased: boolean) => {
      setEnabled(isPurchased);
    };
    Emitter.on('onTrackPhoneEnabled', callback);

    return () => {
      Emitter.off('onTrackPhoneEnabled', callback);
    };
  }, []);

  useEffect(() => {
    const callback = (isLoggedIn: boolean) => {
      if (isLoggedIn) {
        check();
      } else {
        setEnabled(false);
      }
    };
    Emitter.on('onSession', callback);
    return () => {
      Emitter.off('onSession', callback);
    };
  }, []);

  const check = async () => {
    try {
      const request = new HasProductRequest();
      request.setSlug('trackphone');
      const response = await Client.hasProduct(request);
      setEnabled(response.getPurchased());
    } catch (e) {
      Log.warn(TAG, 'check', e);
    }
  };

  const sendLocation = async (location: GeolocationReturnType) => {
    try {
      const request = new SendLocationRequest();
      request.setLatitude(location.coords.latitude.toString());
      request.setLongitude(location.coords.longitude.toString());
      await Client.sendLocation(request);
    } catch (e) {
      Log.warn(TAG, 'sendLocation', e);
    }
  };

  const startTracking = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        sendLocation(position);
      },
      e => {
        Log.warn(TAG, 'getCurrentPosition', e);
      },
      options
    );
    const watchId = navigator.geolocation.watchPosition(
      position => {
        sendLocation(position);
      },
      e => {
        Log.warn(TAG, 'watchPosition', e);
      },
      options
    );
    setWatchId(watchId);
  };

  const stopTracking = () => {
    watchID && navigator.geolocation.clearWatch(watchID);
    setWatchId(0);
  };

  useEffect(() => {
    if (enabled) {
      startTracking();
    } else {
      stopTracking();
    }

    return () => {
      stopTracking();
    };
  }, [enabled]);
  return null;
}

export default LocationManager;
