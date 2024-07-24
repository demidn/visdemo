import { useFormik } from 'formik';
import { useWidgets } from '../../entities/visualization';

export interface ConnectDatasourcePayload {
  uid: string;
  properties: Record<string, string>;
  dsProperties: Record<string, string>;
}

const INITIAL_VALUES: ConnectDatasourcePayload = {
  uid: '',
  properties: {},
  dsProperties: {},
};

interface ConnectDatasourceService {
  formik: ReturnType<typeof useFormik<ConnectDatasourcePayload>>;
}

export function useConnectDatasource(widgetUid: string): ConnectDatasourceService {
  const [widgets, setWidgets] = useWidgets();


  const formik = useFormik<ConnectDatasourcePayload>({
    initialValues: INITIAL_VALUES,

    onSubmit: (values) => {
      const dsUid = values.uid;
      setWidgets(
        widgets.map((w) =>
          w.uid === widgetUid ? { ...w, dsUid, propertiesToColumns: values.properties, dsProperties: values.dsProperties } : w,
        ),
      );
    },
  });

  return {
    formik,
  };
}
