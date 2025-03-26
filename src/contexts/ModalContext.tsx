import React, { createContext, useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../components/ui/Button';

interface ModalContextType {
  isBuySellModalOpen: boolean;
  openBuySellModal: () => void;
  closeBuySellModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({
  isBuySellModalOpen: false,
  openBuySellModal: () => {},
  closeBuySellModal: () => {},
});

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isBuySellModalOpen, setIsBuySellModalOpen] = useState(false);

  const openBuySellModal = () => {
    setIsBuySellModalOpen(true);
  };

  const closeBuySellModal = () => {
    setIsBuySellModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isBuySellModalOpen,
        openBuySellModal,
        closeBuySellModal,
      }}
    >
      {children}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isBuySellModalOpen}
        onRequestClose={closeBuySellModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Buy/Sell MUSK</Text>
            <Text style={styles.modalDescription}>This is the buy/sell modal content.</Text>
            <Button 
              label="Close" 
              primary={true} 
              onPress={closeBuySellModal} 
              style={styles.closeButton}
            />
          </View>
        </View>
      </Modal>
    </ModalContext.Provider>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalContainer: {
    backgroundColor: '#1E1E2D',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  modalDescription: {
    fontSize: 16,
    color: '#999999',
    marginBottom: 24,
    textAlign: 'center',
  },
  closeButton: {
    minWidth: 120,
  },
});
