import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default function Person() {
    return (
       <>
          <List>
            {['Jordan Awesome', 'Oleg Spy', 'Nicholas Cigar', 'Michelle Pep', 'Mr. Sleepy'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
       </>
    );
  }