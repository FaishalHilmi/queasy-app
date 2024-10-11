import Title from "../molecules/Title";
import Button from "../atoms/Button";
import SubTitle from "../molecules/SubTitle";
import ImageModal from "../molecules/ImageModal";

export default function ModalLayout({ handleAction, handleCancel }) {
  return (
    <div className="modal fixed bg-black/40 min-h-screen w-full z-50">
      <div className="container-content flex justify-center items-center h-screen px-4 lg:px-36 w-full">
        <div className="modal-wrapper border font-primary text-primary bg-white rounded-lg py-10 px-5 lg:px-10 text-center">
          <div className="image mb-8">
            <ImageModal path="/assets/images/icon-danger-modal.png" />
          </div>
          <Title>Sign Out</Title>
          <SubTitle>
            Are You sure would like to sign out of your account?
          </SubTitle>
          <div className="button mt-5 lg:mt-7 flex justify-center gap-3">
            <Button handle={handleAction} className="secondary">
              Sign Out
            </Button>
            <Button handle={handleCancel} className="third">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
