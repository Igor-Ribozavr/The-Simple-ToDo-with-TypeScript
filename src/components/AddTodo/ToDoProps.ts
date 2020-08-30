export type ToDoProps = {
  value: { id: string; title: string };
  setRep: React.Dispatch<React.SetStateAction<boolean>>;
  rep: boolean;
}; 
