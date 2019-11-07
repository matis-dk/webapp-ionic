import React from 'react';
import { IonBackButton, IonButtons, IonHeader, IonRouterOutlet, IonPage, IonToolbar, IonTitle, IonContent, IonItem } from '@ionic/react';
import { withRouter, Route } from 'react-router-dom'

const Details = (props: any) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>Detail page</h1>
        <IonItem routerLink={`/tab1/randomid`} >
          Link to Details 
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Details;
