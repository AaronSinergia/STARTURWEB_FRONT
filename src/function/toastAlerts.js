import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastSuccess = (message) => {
  toast.success(message);
};

const toastError = (message) => {
  toast.error(message);
};

const toastInfo = (message) => {
  toast.info(message);
};

const toastWarning = (message) => {
  toast.warning(message);
};

export { toastSuccess, toastError, toastInfo, toastWarning };
