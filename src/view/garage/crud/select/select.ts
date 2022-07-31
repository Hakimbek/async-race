export default function selectCar(element: HTMLElement) {
  const select = element;
  const id = select.getAttribute('index') as string;
  const name = select.getAttribute('name') as string;
  const color = select.getAttribute('color') as string;
  (document.getElementById('editName') as HTMLInputElement).disabled = false;
  (document.getElementById('editName') as HTMLInputElement).value = name;
  (document.getElementById('editColor') as HTMLInputElement).value = color;
  (document.getElementById('editButton') as HTMLButtonElement).setAttribute('index', id);
}