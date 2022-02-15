import { View, Text } from '../../components/Themed';
import { styles } from  './debit.style';

export const Balance = () => {
  return (
    <View style={styles.balanceWrap}>
      <View style={styles.cashView}>
          <Text style={styles.cashViewText}>S$</Text>
      </View>
      <Text style={[styles.cashViewText, styles.balance]}>3,000</Text>
    </View>
  );
}
