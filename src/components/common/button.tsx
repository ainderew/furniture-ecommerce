export enum colorEnum {
  darkPrimary = 'darkPrimary',
  primary = 'primary',
  greyLight = 'greyLight',
  greyBorder = 'greyBorder',
  darkBorder = 'darkBorder',
  transparentWhite = 'transparentWhite',
}
interface props {
  label: String;
  color: colorEnum;
  textColor?: String;
}

const Button: React.FC<props> = ({ label, color, textColor = 'black' }) => {
  return <button className={`flex-1 bg-${color} text-${textColor} px-8 py-4`}>{label}</button>;
};

export default Button;
