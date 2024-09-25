import { default as AddRemoveElementsPage } from "../page_objects/AddRemoveElementsPage";

describe('Adicionar emelemnto', () => {
    it('O elemento deve ser adicionado com sucesso', () => {
        AddRemoveElementsPage.visit();
    });
});