import Dropzone from 'components/base/Dropzone';

const AddPhotos = ({ title }: { title: string }) => {
  return (
    <>
      <h3 className="mb-6">{title}</h3>
      <Dropzone
        accept={{
          'image/*': ['.png', '.gif', '.jpeg', '.jpg']
        }}
        className="border border-dashed"
      />
    </>
  );
};

export default AddPhotos;
