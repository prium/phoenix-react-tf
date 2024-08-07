import Dropzone from 'components/base/Dropzone';

const AddPhotos = () => {
  return (
    <>
      <h3 className="mb-6">Add property picture</h3>
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
