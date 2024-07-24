import React, { Fragment } from 'react';
import { Button, Dialog, Fieldset, Listbox, Option } from '@xemida/ui';
import { useConnectDatasource } from '../../features';
import { DATASOURCES_META, getDataSourceMeta } from '../../entities/datasource';
import { WidgetMeta } from '../../entities/widget';

const DATASOURCE_OPTIONS: Option<string>[] = DATASOURCES_META.map(({ name, uid }) => ({ value: uid, label: name }));

export function ConnectDialog({ open, onClose, widgetMeta }: { open: boolean; onClose: () => void; widgetMeta: WidgetMeta }): React.JSX.Element {
  const widgetUid = widgetMeta.uid;
  const { formik } = useConnectDatasource(widgetUid);
  const dsMeta = getDataSourceMeta(formik.values.uid);

  const dsColumns = (dsMeta?.columns ?? []).map((column) => ({ value: column, label: column }));

  const handleConnectClick = () => {
    formik.handleSubmit();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Dialog.Panel>
        <Dialog.Title>Connect DataSource to {widgetMeta.chartMeta.name} chart</Dialog.Title>
        <input type="hidden" className="w-0 h-0" name={'widgetUid'} value={widgetUid} onChange={formik.handleChange} />

        <form className="mt-[30px]" onSubmit={formik.handleSubmit}>
          <Fieldset>
            <Fieldset.Field>
              <Fieldset.Label>Datasource</Fieldset.Label>
              <Listbox options={DATASOURCE_OPTIONS} value={formik.values.uid} onChange={(value) => formik.setFieldValue('uid', value)} />
            </Fieldset.Field>

            {dsMeta && dsMeta.properties.length !== 0 && <h2>Data source properties</h2>}
            {dsMeta &&
              dsMeta.properties.map(
                (prop) =>
                  prop.type === 'list' && (
                    <Fieldset.Field key={prop.uid}>
                      <Fieldset.Label>{prop.name}</Fieldset.Label>
                      <Listbox
                        options={prop.options}
                        value={formik.values.dsProperties[prop.uid]}
                        onChange={(value) => formik.setFieldValue(`dsProperties.${prop.uid}`, value)}
                      />
                    </Fieldset.Field>
                  ),
              )}
            {dsMeta &&
              widgetMeta.chartMeta.properties.map((property) => (
                <Fragment key={property}>
                  <h2>Chart to columns mapping</h2>
                  <Fieldset.Field>
                    <Fieldset.Label>{property}</Fieldset.Label>
                    <Listbox
                      options={dsColumns}
                      value={formik.values.properties[property]}
                      onChange={(value) => formik.setFieldValue(`properties.${property}`, value)}
                    />
                  </Fieldset.Field>
                </Fragment>
              ))}
          </Fieldset>
        </form>

        <div className="mt-[20px]">
          <Button onClick={handleConnectClick}>Connect</Button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
