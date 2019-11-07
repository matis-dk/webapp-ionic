import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonContent, IonButton, IonItem } from '@ionic/react';
import { Plugins } from '@capacitor/core';
import { withRouter } from 'react-router-dom'
const { LocalNotifications } = Plugins;
const Tab1Page: React.FC = (props: any) => {
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
      <div>
      <IonItem routerLink="/tab1/fromtab1">
        Link
      </IonItem>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default withRouter(Tab1Page);
