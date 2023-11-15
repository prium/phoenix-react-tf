import WidgetECommerce from 'components/modules/widgets/WidgetECommerce';
import WidgetForms from 'components/modules/widgets/WidgetForms';
import WidgetOthers from 'components/modules/widgets/WidgetOthers';
import WidgetStats from 'components/modules/widgets/WidgetStats';
import WidgetTables from 'components/modules/widgets/WidgetTables';
import WidgetUserAndFeed from 'components/modules/widgets/WidgetUserAndFeed';
import WidgetsScrollspyNav from 'components/modules/widgets/WidgetsScrollspyNav';
import ScrollSpy from 'react-ui-scrollspy';

const Widgets = () => {
  return (
    <div className="mb-9">
      <WidgetsScrollspyNav />
      <ScrollSpy activeClass="active" offsetTop={50}>
        <WidgetStats />
        <WidgetTables />
        <WidgetECommerce />
        <WidgetUserAndFeed />
        <WidgetForms />
        <WidgetOthers />
      </ScrollSpy>
    </div>
  );
};

export default Widgets;
