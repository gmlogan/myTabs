import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const Tabs: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tabs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">The world is your oyster.</IonContent>
    </IonPage>
  );
};
export default Tabs;
