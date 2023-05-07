const parent = $0;

const inputs = Array.from(parent.querySelectorAll('input'));
const label = Array.from(parent.querySelectorAll('label'));

const val = inputs.map((input, index) => ({
  name: input.name,
  label: label[index].innerHTML,
  value: label[index].innerHTML.split(' ').join('_').toLowerCase()
}));
