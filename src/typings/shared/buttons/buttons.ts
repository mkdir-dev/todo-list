import { IconButtonProps } from '@mui/material/IconButton';

export interface IconBtnProps {
  label: string;
  children: React.ReactElement;
  handleClick: () => void;
}

export interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
