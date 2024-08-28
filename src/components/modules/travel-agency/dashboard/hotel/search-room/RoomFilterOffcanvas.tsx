import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import { Dispatch, SetStateAction } from 'react';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import RoomFilterOffcanvasContent from './RoomFilterOffcanvasContent';
interface LeadDetailsOffcanvasProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const RoomFilterOffcanvas = ({ open, setOpen }: LeadDetailsOffcanvasProps) => {
  const { breakpoints } = useBreakpoints();

  return (
    <>
      {breakpoints.down('xl') && (
        <PhoenixOffcanvas
          open={open}
          onHide={() => setOpen(false)}
          style={{ width: 300 }}
          className="p-4 phoenix-offcanvas-content scrollbar"
          placement="start"
          fixed
        >
          <RoomFilterOffcanvasContent />
        </PhoenixOffcanvas>
      )}
    </>
  );
};

export default RoomFilterOffcanvas;
