# Hydration Reminder App

A mobile app built with **React Native** and **Expo (SDK 58)** for the Mobile Application Development course, Practical Tutorial 06: *Local Notifications & Tab Navigation in Expo*.

**Developer:** [U.K.R.Bhagya] ([PS/2022/229])
**Department of Statistics & Computer Science, University of Kelaniya**
**Academic Year 2024/2025 (Semester 2)**

## What We Built

The Hydration Reminder App reminds the user to drink water at regular intervals using **local notifications**. It has three tabs, built with Expo Router.

### Tab 1: Reminder
- The user can type a **custom reminder message**.
- The user can set the **reminder interval in minutes**.
- **Start Reminders** schedules a repeating local notification.
- **Stop Reminders** cancels all scheduled notifications.
- A status indicator shows whether reminders are **Active 🟢** or **Inactive 🔴**.

### Tab 2: Tips
- A static page that explains the benefits of staying hydrated.

### Tab 3: About
- Information about the app and its developer.

## Concepts Covered

- **Local vs. Push notifications:** local notifications are scheduled and triggered on the device and need no internet connection or server.
- **Permissions:** `Notifications.requestPermissionsAsync()` asks the user for notification permission.
- **Foreground handling:** `Notifications.setNotificationHandler` shows notifications even while the app is open.
- **Scheduling:** `Notifications.scheduleNotificationAsync()` with a repeating `TIME_INTERVAL` trigger.
- **Cancelling:** `Notifications.cancelAllScheduledNotificationsAsync()` stops all reminders.
- **Tab navigation:** a bottom tab layout using `expo-router`.
- **Rules of Hooks:** `useEffect` and `useState` are called at the top level of the component.

## Project Structure

```
HydrationReminder/
├── app/
│   ├── _layout.tsx    # Tab navigation + global notification handler
│   ├── index.tsx      # Reminder tab (core notification logic)
│   ├── tips.tsx       # Tips tab
│   └── about.tsx      # About tab
├── Output_Screens/    # Screenshots of the app output
└── README.md
```

## Technologies Used

- React Native
- Expo SDK 58
- Expo Router
- expo-notifications
- TypeScript

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server and clear the cache:
   ```bash
   npx expo start -c
   ```
3. Open the **Expo Go** app on a **physical device** and scan the QR code.
4. Allow notifications when prompted.
5. Set the interval to 1 minute, tap **Start Reminders**, and go to the home screen to see the notification arrive.

> Note: Local notifications work in Expo Go. Testing on a physical device is recommended, as emulators may not show notification UI or sounds correctly.

## Output Screenshots

All screenshots are saved in the `Output_Screens` folder:

- Notification permission prompt
- Reminder tab (inactive and active states)
- Notification received (background and foreground)
- Tips tab
- About tab
