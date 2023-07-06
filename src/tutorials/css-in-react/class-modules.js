import BasePage from '../../components/base-page/base-page'
import styles from './class-modules.module.css'

const ClassModules = () => {
  /**
   * file.module.css
   *  => .class {...} => .file_calss__hash {....}
   * className={[style['class1], styles[class2]].join(' ')}
   * className={`${style['class1]} ${styles[class2]}}
   */
  console.log(styles)
  return (
  <BasePage fluid={true} title={'class-module'}>
    <div className={styles['class-modules-wrapper']}>
      <h2 className={`${styles['title']} ${styles['mb-5']} App`}>Class Modules in React</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, incidunt excepturi in
        temporibus rem dolor deserunt beatae, accusantium quas, ipsam explicabo atque inventore sit
        debitis laudantium voluptate fuga aut quos!
      </p>
      
      <button className={styles['button']}>CSS Module</button>
      <button className={`${styles['button']} ${styles['active']}`}>CSS Module .active</button>
      <button className={`${styles['button']} active`}>CSS Module .active</button>
    </div>
  </BasePage>
  )
}

export default ClassModules
