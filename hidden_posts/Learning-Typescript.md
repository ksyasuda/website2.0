---
title: "Learnig TypeScript for JavaScript and React"
subject: "Learning"
date: "10/04/2020 8:50 PM"
default_height: "900vh"
laptop_height: "1200vh"
phone_height: "1500vh"
---

My coding background, prior to learning web development, had mostly been in strongly typed languages such as C++ land Java. I had known that TypeScript existed and that it was a superset of JavaScript. The problem was when I discovered TypeScript, I was in the process of learning HTML, css, and JavaScript and wanted to focus on learning those before I jumped into learning TypeScript. Now I feel that my knowledge of JavaScript is at the point where I can jump into learning TypeScript. While I am not a JavaScript master yet, having only used the language for a little over 4 months now, since TypeScript is a superset of JavaScript, I can continue to learn JavaScript and use JavaScript after learning TypeScript.

---

## Sections

1. [Where To Start](#where-to-start)
2. [Helpful Extensions](#helpful-extensions)
3. [Planning my First TypeScript React Project](#first-project)
4. [Setting Up Webpack](#setting-up-webpack)
5. [Making the Transaction Component](#making-transaction-comp)
6. [Writing the Form class](#writing-form-class)

---

## Where to start <a name="where-to-start"></a>

The first place I always start when learning how to use a new programming language, framework, or library is the [official documentation](https://www.typescriptlang.org/docs/handbook/2/basic-types.html "TypeScript documentation V2 | The Basics").

Since I had spent the time to learn JavaScript prior to learning TypeScript, I
was able to follow the TypeScript for JavaScript devs tutorial.

<p style="text-align: center;">The documentations typically includes many examples along with the explanation of each concept and rule.</p>

![example from the TypeScript docs](https://imgur.com/QbMHcUd.jpg)

For each example in the docs, I created a small function, class, or code snippet that utilizes the concept shown in the example.

---

## Helpful Extension <a name="helpful-extensions"></a>

One helpful extension that I used when learning both JavaScript and TypeScript
was the [Quokka.js extension for vscode](https://quokkajs.com/ "QUOKKA Home
Page"), which is a tool for "Rapid JavaScript/TypeScript prototyping. Runtime
values are updated and displayed in your IDE next to your code as you type."

![quokka.js example](https://i.imgur.com/HfNGp1t.png)

With this extension I was able to quickly see whether or not my code snippets
were working.

---

## Planning my First TypeScript Project <a name="first-project"></a>

After I have finished going through the official documentation, I like to create
little programs that utilize what I have learned.

For this, I decided to create a Balance Book App that will allow the user to log
every transaction made and calculate the montly spending summary as well as the
overall balance.

I thought that this would be a good choice for a small projects as all I really
need to create is the layout, the input form for each transaction, a transaction
React component for its reusability, and a base class to keep track of
everyting.

Additionally, I decided not to use create-react-app for this project and learn how to configure Webpack manually instead.

---

## Setting up Webpack <a name="setting-up-webpack"></a>

I modified a starter configuration I found online add added functionality to allow for [CSS Modules](https://github.com/css-modules/css-modules "CSS Modules GitHub page").

![my webpack.config.js file](https://i.imgur.com/B6wujkZ.png)

<!-- TODO change to picture without transparent background  -->

The `css-loader` and `style-loader` are loaders for webpack that enable the use of CSS Modules in TypeScript.

The main advantage of CSS Modules is localized styles per-component as opposed to a global classname style that applies to all elements that share the same classname.

---

## Creating the BalanceBook Container

For the main container that will serve as the index page of the application, I created an interface for the state.

```ts
interface State {
    initialBalance: number
    currentBalance: number
    transactionAmount: number
    transactions: Array<any>
    transactionName: string
    transactionType: string
    transactionDate: string
    formData: any
    form: any
}
```

The transactions array will hold either: JavaScript objects contining the information for each transaction, or the Transaction components themselves in an array that can be rendered to the screen.

The formData and form properties will hold the information that will be passed to the Form component to create the form for user input.

The rest of the implementation for this class will have to wait for later as this is the base container that will utilize the two other main components I will make: the Transaction component and the Form component.

As a result, I typically render some filler text describing what the output should look like in the end or what will end up replacing the filler text. For instance I will output filler text in the location where I want the Form component to be rendered so that when the component is finished, I should be able to plug-and-play.

---

## Making the Transaction Component <a name="making-transaction-comp"></a>

The next step was to make a React component for each transaction.

In order to do this, I passed in the necessary information as props to the component.

```ts
type Props = {
    balance: number
    transactionAmount: number
    transactionName: string
    transactionDate: string
    transactionType: string
}
```

I created a Props type that defines the Props that are needed for the component

`balance` is passed in so that the component can display the balance after the transaction.

The actual Transaction component itself is relatively simple:

```js
return (
    <div className={classes.Container} style={style}>
        <p className={classes.TName}>
            <span className={classes.TNameText}>{transactionName}</span> on{" "}
            {transactionDate}
        </p>
        <p className={classes.TAmount}>
            ${balance} {transChar} ${transactionAmount} = ${afterBalance}
        </p>
    </div>
)
```

Each type of transaction gets a standardized styling as defined in `Transactions.module.css`.

However, depending on `transactionType`, denoted by a '+' or a '-', the background color will either be green for a positive balance change and red for a negative change.

---

## Writing the Form Class <a name="writing-form-class"></a>

The next step was to create the Form class, which will return HTML form elements based on the `elementType` prop.

Additionally, the information needed for each form element such as 'placeholder' or 'name' are included in the `elementConfig` prop.

```ts
switch (this.state.elementType) {
    case "text":
        return (
            <input
                id='tname'
                type={this.state.elementType}
                value={this.state.value}
                placeholder={this.state.elementConfig.placeholder}
                name={this.state.elementConfig.name}
                onChange={this.handleChange}
            />
        )
    case "number":
        return (
            <input
                id='tamount'
                type={this.state.elementType}
                value={this.state.value}
                placeholder={this.state.elementConfig.placeholder}
                name={this.state.elementConfig.name}
                onChange={this.handleChange}
                style={{
                    marginRight: "10px",
                    marginLeft: "10px",
                }}
            />
        )
    case ...
    case "submit":
        return <input type='submit' />
}
```

With this, each type of form element needed can be created programatically by looping through an array that contains the `elementConfig` for each input type.

![creating the forms](https://i.imgur.com/GGk8cPs.png)

---
