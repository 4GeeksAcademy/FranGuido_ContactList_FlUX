const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [
				{
					id: 1,
					name: "Ana García S.",
					email: "ana@email.com",
					phone: "5555-5555",
					address: "Nosara, Guanacaste"
				},
				{
					id :2,
					name: "Daniel Mendoza Q.",
					email: "daniel@email.com",
					phone: "6666-6666",
					address: "Cahuita, Limón"
				}
			],

			contactToBeDeleted: null,
			showModal: false,
		},

		actions: {



















			// ACTIONS BELOW ARE FOR BOILERPLATE DEMO
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
