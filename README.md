# Mortgage Repayment Calculator

This project is a mortgage repayment calculator built to closely match the provided design, enhancing my skills in React and related technologies.

## Features

* Mortgage Calculation: Input mortgage information such as loan amount, interest rate, and loan term to calculate monthly and total repayments.
* Validation Messages: Receive immediate feedback if required fields are missing or contain invalid data.
* Keyboard Navigation: Navigate through the form fields and submit the form without using a mouse.
* Responsive Layout: The design adjusts seamlessly to various screen sizes, providing an optimal user experience on mobile, tablet, and desktop devices.
* Interactive UI Elements: Visual feedback on hover and focus states for buttons and inputs enhances usability.

## Demo
1. When you first enter the page, you see a blank form. Carefully executed styles and well-chosen color scheme makes the user happy. When you hover the cursor over the input fields and button, their frames will be highlighted. 
![Desktop form](/docs/img/empty_desktop.png)

Pay special attention to prefixes and suffixes in text input fields. You can easily customize their presence and/or position with react props

```tsx
<TextInput name="amount" label="Mortgage Amount" prefix="£" control={control}/>
```
The application adapts to the display size of your device.
There are tablet and mobile versions.

![Tablet form](/docs/img/empty_tablet.png)
![Phone form](/docs/img/empty_phone.png)

2. As soon as the user touches any of the fields the validation of the touched field starts working. If the user enters incorrect data or leaves the required field empty, the validator will highlight the input field with a red frame and add an informative description of the error.

![Validation](/docs/img/validation_desktop.png)

Thanks to the NumericFormat input mask, which works in conjunction with rhf + yup validation, you can always make sure that the user enters only the data you expect to receive.

3. Once the user enters all the required details and clicks **Calculate Repayments** button, he will see how results block filled with calculated numbers.

![Calculated](/docs/img/calculated_desktop.png)

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/your-username/mortgage-repayment-calculator.git 
```
2. Navigate to the project directory:
```bash
cd mortgage-repayment-calculator
```
3. Install dependencies:
```bash
pnpm install
```

_Note: This project uses pnpm as the package manager. If you don't have it installed, you can install it globally using:_

```bash
npm install -g pnpm
```
4. Start the development server:
```bash
pnpm run dev
```
5. Open the application:
```bash
Open http://localhost:3000 in your browser to view the web application.
```
## Technologies Used

* **HTML** & **CSS**
* **TypeScript**
* **React**
* **React Hook Form**
* **Yup**
* **Styled-components**
* **React Number Format**

## Designed by

[Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73)

## Implemented by

[Oleksii Husak](https://www.linkedin.com/in/oleksii-husak/)

## Special thanks to

[Alex Fitiskin](https://github.com/afitiskin),
[kpogodin](https://github.com/kpogodin),
[Aleksei Lazev](https://github.com/NotAleksei)