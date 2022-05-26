import React, {FC} from 'react';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import {KeyboardAvoidingView} from 'react-native';

interface IModalMenu {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
}

export const ModalMenu: FC<IModalMenu> = ({
  showModal,
  setShowModal,
  children,
}) => {
  const closeModal = () => setShowModal(false);

  return (
    <StyledModal
      avoidKeyboard={true}
      isVisible={showModal}
      onSwipeComplete={closeModal}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      swipeDirection={['up']}
      animationIn={'slideInDown'}
      animationOut={'slideOutUp'}
      backdropOpacity={0.1}
      useNativeDriverForBackdrop
      useNativeDriver
      hideModalContentWhileAnimating>
      <KeyboardAvoidingView behavior="position" enabled>
        <Container>{children}</Container>
      </KeyboardAvoidingView>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  margin: 0;
  justify-content: flex-start;
  height: 100px;
  background-color: ${props => props.theme.colors.basic.white};
`;

const Container = styled.SafeAreaView`
  overflow: hidden;
  height: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${props => props.theme.colors.basic.white};
`;
