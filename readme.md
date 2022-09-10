# Fee's Retrival Application

---

- This Application revolves around retrival of Fees based on the selection of the options.

### Features

---

- This application asks the INPUT from the user about the Type of Fee Enter the options ,option 1 for Exam Fee and option 2 for Application Fee
- Then after entering the Fee type ,the Nationality type is being asked from the user 
- If the Fee type is Exam fee then the options for Nationality Types are Enter the options 1 for INDIAN  option 2 for FOREIGN option 3 for NRI option 4 for SAARC
- If the Fee type is Application Fee then the options for Nationality Types are Enter the options 1 for INDIAN option 2 for FOREIGN
- Then after that user is asked to enter the course Enter the option 1 for Ayurveda option 2 for Dental option 3 for Medical
- Then after the course is entered then the levels will be asked to enter Enter the option 1 for DIPLOMA option 2 for PG option 3 for Ph.D option 4 for UG -for Exam Fee (selection)
- Or Enter the option 1 for UG-DIPLOMA option 2 for PG option 3 for UG  - for Application Fee (selection)

### Code organisation in the repository-

---

The whole code base is arranged in directories and files.
Project has Utils folder and files like server.js(where the entire logic is present)


1. So There is Utils folder where constants file and structure of the whole js object(from where we do computation) is present.
2. Then there is server.js file where the user input logic and the fee retrival based on the conditions is present



#### Install the dependencies and devDependencies by following instructions.

```sh
git clone https://github.com/SriSarveshA1/tropos_fee_structure.git
cd folder_name
npm install
```

### Installation

---

- To make the application up and running in your machine, follow the below steps after all configuration and related dependecies installation done.

```sh
cd  folder_name
node server.js
```

