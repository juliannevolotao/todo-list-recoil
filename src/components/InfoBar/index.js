import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../../recoil/selectors';
import { TextContainer, ItemBox } from './style';
import CheckedIcon from '../../assets/svgs/check-square';
import UncheckedIcon from '../../assets/svgs/square';
import ListIcon from '../../assets/svgs/list';

export default function InfoBar() {
  const {totalChecked, totalTasks, totalUnchecked} = useRecoilValue(todoListStatsState);
  
  return (
      <TextContainer>
        <ItemBox>
          {ListIcon()}
          <span> {totalTasks} </span>
        </ItemBox>
        <ItemBox>
          {CheckedIcon()}
          <span> {totalChecked} </span>
        </ItemBox>
        <ItemBox>
          {UncheckedIcon()}
          <span> {totalUnchecked} </span>
        </ItemBox>
      </TextContainer>
  )
}