import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import NewBoardProvider from "../assets/components/NewBoard/NewBoardProvider";
import Columns from "../assets/components/ColumnComponent/Columns";

function NewBoardPage() {
  return (
    <DndProvider backend={HTML5Backend}>
      <NewBoardProvider>
        <Columns />
      </NewBoardProvider>
    </DndProvider>
  );
}

export default NewBoardPage;
