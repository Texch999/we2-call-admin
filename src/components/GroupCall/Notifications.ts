import { LocalNotifications } from "@awesome-cordova-plugins/local-notifications";
class Notifications {
  public async schedule(data: any[]) {
    try {
      if (!LocalNotifications.hasPermission()) {
        await LocalNotifications.requestPermission();
      }
      // Request/ check permissions

      // Clear old notifications in prep for refresh (OPTIONAL)
      // const pending = await LocalNotifications.;
      // if (pending.notifications.length > 0)
      //   await LocalNotifications.cancel(pending);
      data = data ? data : [];
      LocalNotifications.schedule([...data]);
    } catch (error) {
      console.error(error);
    }
  }
  public async clearAllNotifications() {
    try {
      LocalNotifications.clearAll();
    } catch (error) {
      console.error(error);
    }
  }
}

export default new Notifications();
