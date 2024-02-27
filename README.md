# supreme-adventure
# Event Registry README

Welcome to the Event Registry repository! This repository serves as a comprehensive solution for managing events such as weddings, birthdays, or baby showers. Whether you're organizing a joyous celebration, this registry offers the tools you need to keep track of guests, gifts, and other essential details.



### User Story:
As a user interested in organizing an event, I want to utilize the Event Registry platform to streamline my planning process.

#### Scenario: Signing Up or Logging In

**Given:** I am a new user or an existing user of the Event Registry platform.  
**When:** I access the Event Registry website.  
**Then:**
- If I am a new user:  
  - I want to sign up for an account by providing a unique username and password.  
  - After signing up, I expect to be directed to the homepage/dashboard.   
- If I am an existing user:  
  - I want to log in using my existing credentials.  
  - After logging in successfully, I expect to be directed to the homepage/dashboard.  

#### Scenario: Creating an Event List and Adding Items  

**Given:** I am logged in and on the homepage/dashboard of the Event Registry platform.  
**When:** I decide to organize a new event.  
**Then:**  
- I want to create a new event list by specifying the event's name, date, and type.  
- After creating the event list, I want the option to add items to it, such as gifts or tasks related to the event.  
  
#### Scenario: Viewing Event Lists on the Homepage

**Given:** I am logged in and on the homepage/dashboard of the Event Registry platform.  
**When:** I want to see an overview of all my event lists.  
**Then:**
- I expect to see each event list displayed as a card on the homepage/dashboard.
- Each card should contain essential information about the event, such as its name, date, and location.
- I can click on a card to view and manage the details of the corresponding event list.  

### ---------------Future Development---------------
#### Scenario: Managing Guests and RSVPs

**Given:** I have created an event and need to manage attendees.  
**When:** I want to handle guest invitations and RSVPs efficiently.  
**Then:**
- As a user, I want to:
  - Easily add guests to the event list and track their RSVP status.
  - Receive notifications for RSVPs and manage guest details seamlessly.
  - Have a clear overview of attendees and their preferences for smooth event planning.

#### Scenario: Task Management

**Given:** I am organizing an event and need to manage tasks.  
**When:** I want to ensure tasks are completed on time.  
**Then:**
- As a user, I want to:
  - Create and assign tasks for event preparation and execution.
  - Track task progress, mark them as complete, and receive reminders for pending tasks.
  - Collaborate with team members efficiently by sharing tasks and updates.

#### Scenario: Budget Tracking

**Given:** I have a budget for my event and want to stay within it.  
**When:** I need to monitor expenses.  
**Then:**
- As a user, I want to:
  - Set a budget for the event and track expenses against it.
  - Categorize expenses and receive alerts for budget overruns.
  - Have a clear overview of spending to make informed decisions and adjustments.

#### Scenario: Customizable Invitations

**Given:** I want to send personalized invitations for my event.  
**When:** I need to design and distribute invitations.  
**Then:**
- As a user, I want to:
  - Choose from a variety of invitation templates and customize them with event details.
  - Preview invitations before sending and track their delivery status.
  - Add personal touches to invitations to match the event's theme and style.

#### Scenario: Interactive Event Dashboard

**Given:** I am managing multiple events and need an overview.  
**When:** I want to access event details and monitor progress.  
**Then:**
- As a user, I want to:
  - Access a centralized dashboard displaying all events and their key details.
  - Monitor RSVPs, task completion, and budget status for each event.
  - Customize the dashboard layout to prioritize important information.

#### Scenario: Collaborative Planning

**Given:** I am coordinating with others to plan an event.  
**When:** I need to share responsibilities and updates.  
**Then:**
- As a user, I want to:
  - Invite collaborators to join event planning efforts and assign tasks.
  - Communicate with team members within the platform and track their contributions.
  - Ensure transparency and accountability in the planning process.
## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributers](#contributers)
- [Future Features](#future-features)
- [License](#license)
- [Deployed Application](#deployed-application)

## Introduction
## Introduction
Welcome to the Event Registry –   
your ultimate solution for streamlining the planning process of your special occasions.   
Crafted with an intuitive interface and packed with robust features, our platform empowers you to effortlessly oversee invitations, track RSVPs, curate gift registries, and beyond.   
This README offers a comprehensive overview of the repository along with detailed instructions for installation and usage.

## Features
- **Event Creation**: Easily create new events by specifying details such as event type, date, time, and location.
- **Gift Registry**: Create and manage a list of desired gifts, making it easy for guests to choose and purchase items.
### ---------------Future Development Features---------------
- **Guest Management**: Seamlessly manage your guest list by adding, editing, or removing guests. Keep track of RSVPs and meal preferences for each guest.

- **Task Management**: Stay organized by creating tasks and assigning them to specific events or guests. Track task completion status to ensure everything runs smoothly.

- **Budget Tracking**: Set and monitor your event budget. Record expenses and track spending to stay within your budget constraints.

- **Customizable Invitations**: Design and send personalized invitations to your guests. Choose from a variety of templates and customize them with event details and themes.

- **Interactive Event Dashboard**: Access a centralized dashboard to view all your events at a glance. Monitor RSVPs, tasks, and budget status from one convenient location.

- **Collaborative Planning**: Invite collaborators such as co-hosts or event planners to work together on event organization. Share access to event details and tasks for seamless collaboration.
## Installation
To set up the Event Registry on your local machine, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/C-Johnson83/supreme-adventure.git
   ```
2. Navigate to the project directory:
   ```bash
   cd supreme-adventure
   ```
3. Install dependencies using npm:
   ```bash
   npm install

## Usage
After installing the Event Registry, you can start using it for your event planning needs:

1. **Start the Application**:
   ```bash
   npm run dev
   ```
2. **Access the Application**:
   Open your web browser and navigate to `http://localhost:3000` to access the Event Registry.

3. **Create an Event**:
   Begin by creating a new event and providing essential details such as the event type, date, time, and location.    

4. **Set Up Gift Registry**:  
   Optionally, set up a gift registry and add desired items. Guests can then view the registry and mark gifts as purchased.
### ----------------Not quite Yet----------------
5. **Manage Guests**:
   Add guests to your event, including their names, email addresses, and any additional notes. You can also track RSVPs and meal preferences if applicable.



## Contributers
Contributing to this project are 3 very skilled software developers:  
    -   C-Johnson83 aka Chrispy  
    -   dbrainz   
    - Hanszilzer

## Future Features
- **Guest Management**: Keep track of invited guests, including their contact information and RSVP status.  
- **Event Details**: Store essential information about the event, such as date, time, location, and theme.  
- **RSVP Tracking**: Monitor responses from guests, allowing you to plan accordingly based on attendance.  
- **Customizable Templates**: Personalize invitations and other communications with customizable templates.  
- **Multi-Event Support**: Manage multiple events simultaneously, each with its unique set of details and guests.  
- **Security**: Ensure the security of sensitive information with encryption and access control measures.  

## License
This project is licensed under the MIT License. For more information, see the [LICENSE](LICENSE) file.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Thank you for choosing the Event Registry for your event planning needs! If you have any questions or need assistance, please don't hesitate to reach out to us. Happy planning! 🎉

## Deployed Application
https://registry-km6c.onrender.com/



