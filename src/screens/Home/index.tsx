import React, {useState} from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';
import { Buttons } from '../../components/Buttons';
import { Menu } from '../../components/Menu';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';

const Lista = [
  {
    id: '1',
    title: 'Compra no débito',
    value: 'R$ 36,00',
    desc: 'Ifd*Br',
    date: '06/07/2021'
  },
  {
    id: '2',
    title: 'Transferência recebida',
    value: 'R$ 54,00',
    desc: 'Roberto Souza Filho',
    date: '26/06/2021'
  },
  {
    id: '3',
    title: 'Transferência recebida',
    value: 'R$ 27,25',
    desc: 'TG BRASIL SERVICOS DE INTERNET',
    date: '20/06/2021'
  },
  {
    id: '4',
    title: 'Compra no débito',
    value: 'R$ 32,00',
    desc: 'Pastelão do Bessa',
    date: '19/06/2021'
  },
  {
    id: '5',
    title: 'Pagamento efetuado',
    value: 'R$ 25,00',
    desc: 'EBANX LTDA',
    date: '19/06/2021'
  },
];

const Item = ({ title, value, desc, date }) => (
  <>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
    <View style={styles.item}>
      <Text style={styles.desc}>{desc}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  </>
)

export function Home() {

  const [isVisible, setIsVisible] = useState(true)
  const renderItem = ({ item }) => (
    <Item 
    title={item.title} 
    value={item.value} 
    desc={item.desc} 
    date={item.date} />
  );

  function handleToggleVisibility(){
    setIsVisible( (prevState) => !prevState )
  }

  return (
    <Background>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.content}>
            <Text style={styles.titleHeader}>MyBank</Text>
          </View>   
          <View>
              <Menu />
          </View>
        </View> 

        <View style={styles.saldo}>
          <View>
            <Text style={styles.subtitle}>SALDO</Text> 
          </View>
          <View style={styles.infoHeader}>
            <Text style={styles.text}>R$ {isVisible ? '359,87' : '------'}</Text>
            <MaterialIcons 
            style={styles.viewIcon} 
            onPress={handleToggleVisibility}
            name= {isVisible ? "visibility-off" : "visibility"} 
            color="#FFFF" 
            size={33}/>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.box}> 
            <Buttons title={'PAGAR'}>
              <View style={styles.icon}>
                <MaterialIcons name="monetization-on" color="#FFFF" size={48}/>
              </View>
            </Buttons>

            <Buttons title={'TRANSFERIR'}>
              <View style={styles.icon}>
                <MaterialIcons name="swap-horiz" color="#FFFF" size={48}/>
              </View>
            </Buttons>
          </View>   

          <View style={styles.box}>
            <Buttons title={'DEPOSITAR'}>
              <View style={styles.icon}>
                <MaterialIcons name="payment" color="#FFFF" size={48}/>
              </View>
            </Buttons>

            <Buttons title={'PIX'}>
              <View style={styles.icon}>
                <MaterialIcons name="add-circle" color="#FFFF" size={48}/>
              </View>
            </Buttons>
          </View>  
        </View>

        <View>
          <ListHeader title='Transações' />

          <FlatList 
          data={Lista} 
          renderItem={renderItem} 
          keyExtractor={item => item.id} 
          ItemSeparatorComponent={() => <ListDivider />}
          />
          
        </View>
      </ScrollView>
    </Background>
  );  
}