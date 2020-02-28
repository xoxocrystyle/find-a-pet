const Pet = ({name, animal, breed}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)
    ])
}

const App = () => {
    return React.createElement(
        "div",
        {id: "something-important"},
        React.createElement("h1", {}, "Adopt Me"),
        React.createElement(Pet, { name: "Bruno", animal: "dog", breed: "Mix"}),
        React.createElement(Pet, { name: "Zeke", animal: "dog", breed: "maltipoo"}),
        React.createElement(Pet, { name: "Momo", animal: "hamster", breed: "russian dwarf"})
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
)