import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { Plugins } from '@capacitor/core';
const { LocalNotifications } = Plugins;

const Tab3Page: React.FC = () => {

  const handleNotification = () => {
    LocalNotifications.schedule({
      notifications: [
        {
          title: "Title",
          body: "Body",
          id: 1,
          schedule: { at: new Date(Date.now() + 1000 * 3) },
          sound: undefined,
          attachments: undefined,
          actionTypeId: "",
          extra: null
        }
      ]
    });
  }

  return (
    <IonPage>
      <IonContent>
      <h1>Side1</h1>
      <div style={{display: "flex", justifyContent: "center", margin: "30px"}}>
        <IonButton onClick={handleNotification}>
          Button for Local Notifications 
        </IonButton>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3Page;
