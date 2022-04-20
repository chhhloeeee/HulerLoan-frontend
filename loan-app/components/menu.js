

import { Menu} from '@headlessui/react'
import Link from 'next/link'
import styles from '../styles/menu.module.css'

function MyLink(props) {
    let { href, children, ...rest } = props
    return (
      <Link href={href}>
        <a {...rest}>{children}</a>
      </Link>
    )
  }

export function DropdownMenu() {
  return (
    <div className={styles.navbar}>
      <Menu as="div" className={styles.dropdown}>
        <div>
          <Menu.Button className={styles.dropBttn}>
            Category
          </Menu.Button>
        </div>
          <Menu.Items>
            <div className={styles.dropdownContent}>
              <Menu.Item>
              <MyLink href="/category/list">View</MyLink>
              </Menu.Item>
              <Menu.Item>
              <MyLink href="/category/add">Add</MyLink>
              </Menu.Item>
            </div>
          </Menu.Items>
      </Menu>
      <Menu as="div" className={styles.dropdown}>
        <div>
          <Menu.Button className={styles.dropBttn}>
            Equipment
          </Menu.Button>
        </div>
          <Menu.Items>
            <div className={styles.dropdownContent}>
              <Menu.Item>
              <MyLink href="/equipment/list">View</MyLink>
              </Menu.Item>
              <Menu.Item>
              <MyLink href="/equipment/add">Add</MyLink>
              </Menu.Item>
            </div>
          </Menu.Items>
      </Menu>
      <Menu as="div" className={styles.dropdown}>
        <div>
          <Menu.Button className={styles.dropBttn}>
            Users
          </Menu.Button>
        </div>
          <Menu.Items>
            <div className={styles.dropdownContent}>
              <Menu.Item>
              <MyLink href="/user/list">View</MyLink>
              </Menu.Item>
              <Menu.Item>
              <MyLink href="/user/add">Add</MyLink>
              </Menu.Item>
            </div>
          </Menu.Items>
      </Menu>
      <Menu as="div" className={styles.dropdown}>
        <div>
          <Menu.Button className={styles.dropBttn}>
            Loan
          </Menu.Button>
        </div>
          <Menu.Items>
            <div className={styles.dropdownContent}>
              <Menu.Item>
              <MyLink href="/loan/list">View</MyLink>
              </Menu.Item>
              <Menu.Item>
              <MyLink href="/loan/add">Add</MyLink>
              </Menu.Item>
            </div>
          </Menu.Items>
      </Menu>
      <Menu as="div" className={styles.dropdown}>
        <div>
          <Menu.Button className={styles.dropBttn}>
            Return
          </Menu.Button>
        </div>
          <Menu.Items>
            <div className={styles.dropdownContent}>
              <Menu.Item>
              <MyLink href="/return/add">Add</MyLink>
              </Menu.Item>
            </div>
          </Menu.Items>
      </Menu>
      <Menu as="div">
        <div>
          <Menu.Button className={styles.topNav}>
          <MyLink href="/">Logout</MyLink>
          </Menu.Button>
        </div>
      </Menu>
    </div>
  )
}