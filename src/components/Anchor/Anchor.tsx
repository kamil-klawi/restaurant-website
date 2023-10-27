import { AnchorProps } from '../../types/AnchorProps';

function Anchor(props: AnchorProps) {
  return (
    <a className={props.className} href={props.href}>
      {props.name}
    </a>
  );
}

export default Anchor;
