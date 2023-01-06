import {
  Modal,
  Button
} from "antd";
import {
  Address,
  DaumPostcodeEmbed
} from "react-daum-postcode";
import {useState} from "react";
import {SearchOutlined} from "@mui/icons-material";


export default function zipCode(handleAddress: Function) {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: Address) => {

    handleAddress('zoncode', data.zonecode)
    handleAddress('address', data.address)

    onToggleModal();
  };

  return (
    <>
      <Button
        onClick={onToggleModal}
        className='address_btn'
      >
        <p style={{marginRight: '5px'}}>주소</p>
        <SearchOutlined />
      </Button>
      {isOpen && (
        <Modal
          visible={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcodeEmbed onComplete={handleComplete}/>
        </Modal>
      )}
    </>
  );
}