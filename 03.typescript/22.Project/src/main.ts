import './style.css'
import List from '../models/List';
import ListItem from "../models/ListItem";
import ListTemplate from '../template/ListTemplate';


const initApp = (): void => {
    // console.log('App initialized');
    const instance = List.instance;
    const template = ListTemplate.instance;
    
    instance.load();
    template.render(instance);

    const itemForm = document.getElementById('form') as HTMLFormElement;
    itemForm.addEventListener('submit', (e: SubmitEvent) :void => {
        e.preventDefault();

        const itemInput = document.getElementById('item-input') as HTMLInputElement;
        const itemValue = itemInput.value.trim();
        if (!itemValue.length) {return;}

        const itemId = instance.list.length ? parseInt(instance.list[instance.list.length - 1].id) + 1 : 1;
        const newItem = new ListItem(itemId.toString(), itemValue, false);

        instance.addItem(newItem);
        template.render(instance);
    });

    const clearItemsBtn = document.getElementById('clear-items-btn') as HTMLButtonElement;
    clearItemsBtn.addEventListener('click', () => {
        instance.clearList();
        template.render(instance);
    });
}

initApp();