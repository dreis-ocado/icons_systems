import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import { Link } from 'gatsby'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import { Abundo, AbundoRegular } from 'components/Icon';

class Icons extends React.Component {
  render() {
    const { location, data } = this.props

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Icons" />
        <div>

          <section className="iconsBlock">
            <div className="container">
            <h2>Abundo (Fontawesome)</h2>
              <div className="row justify-content-md-center">
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: User | Fontawesome" data-placement="bottom" href="https://home.abundo.osp.tech/" target="_blank">
                  <Abundo name="user" />
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Help Center | Fontawesome" data-placement="bottom" href="https://home.abundo.osp.tech/" target="_blank">
                  <Abundo name="question" />
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Date Picker | Fontawesome" data-placement="bottom" href="https://collect.abundo.osp.tech/orders?tab=other" target="_blank">
                  <Abundo name="angle-left" />
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Date Picker | Fontawesome" data-placement="bottom" href="https://collect.abundo.osp.tech/orders?tab=other" target="_blank">
                  <Abundo name="angle-right" />
                </a>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Collection Point dashboard | Fontawesome" data-placement="bottom" href="https://collect.abundo.osp.tech/orders?tab=other" target="_blank">
                  <Abundo name="external-link-alt" />
                </a>
                </div>
                <div className="col-lg-3 col-6 ">
                <a data-tooltip="Context: Search field | Fontawesome" data-placement="bottom" href="https://customers.abundo.osp.tech/app" target="_blank">
                  <Abundo name="search" />
                </a>
                </div>
                <div className="col-lg-3 col-6 ">
                  <a data-tooltip="Context: Close alert | Fontawesome" data-placement="bottom" href="https://customers.abundo.osp.tech/app/customer/email/Davidkjkjjasdas" target="_blank">
                    <Abundo name="times" />
                  </a>
                </div>
                <div className="col-lg-3 col-6 ">
                  <a data-tooltip="Context: Date picker | Fontawesome" data-placement="bottom" href="https://fleet.abundo.osp.tech/#/services" target="_blank">
                    <AbundoRegular name="calendar-alt" />
                  </a>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: See more options | Fontawesome" data-placement="bottom" href="https://fleet.abundo.osp.tech/#/fleet" target="_blank">
                  <Abundo name="ellipsis-h" />
                </a>
                </div>
                <div className="col-lg-3 col-6 ">
                <a data-tooltip="Context: Transfer to | Fontawesome" data-placement="bottom" href="https://fleet.abundo.osp.tech/#/transfers" target="_blank">
                  <Abundo name="arrow-right" />
                </a>
                </div>
                <div className="col-lg-3 col-6 ">
                  <a data-tooltip="Context: View more | Fontawesome" data-placement="bottom" href="https://fleet.abundo.osp.tech/#/transfers" target="_blank">
                    <AbundoRegular name="eye" />
                  </a>
                </div>
                <div className="col-lg-3 col-6 ">
                  <a data-tooltip="Context: Edit | Fontawesome" data-placement="bottom" href="https://fleet.abundo.osp.tech/#/transfers" target="_blank">
                    <Abundo name="edit" />
                  </a>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Fleet violations | Fontawesome" data-placement="bottom" href="https://logistics.abundo.osp.tech/day-view/" target="_blank">
                  <Abundo name="truck" />
                </a>
                </div>
                <div className="col-lg-3 col-6 ">
                <a data-tooltip="Context: Add Zone | Fontawesome" data-placement="bottom" href="https://logistics.abundo.osp.tech/zones" target="_blank">
                  <Abundo name="plus" />
                </a>
                </div>
                <div className="col-lg-3 col-6 ">
                  <a data-tooltip="Context: Update | Fontawesome" data-placement="bottom" href="https://logistics.abundo.osp.tech/zones" target="_blank">
                    <Abundo name="pencil-alt" />
                  </a>
                </div>
                <div className="col-lg-3 col-6 ">
                  <a data-tooltip="Context: Define The Geography For Zone | Fontawesome" data-placement="bottom" href="https://logistics.abundo.osp.tech/zones" target="_blank">
                    <Abundo name="globe-asia" />
                  </a>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Delete | Fontawesome" data-placement="bottom" href="https://logistics.abundo.osp.tech/zones" target="_blank">
                  <Abundo name="trash-alt" />
                </a>
                </div>
                <div className="col-lg-3 col-6 ">
                <a data-tooltip="Context: Refresh | Fontawesome" data-placement="bottom" href="https://logistics.abundo.osp.tech/site-view/2f851f8d-4b1f-4887-a18f-255f5fad321b?day=2018-09-13&currentPage=1&itemsPerPage=20" target="_blank">
                  <Abundo name="sync-alt" />
                </a>
                </div>
                <div className="col-lg-3 col-6 ">
                  <a data-tooltip="Context: Add Shift (Driver) | Fontawesome" data-placement="bottom" href="https://rosters.abundo.osp.tech/in-store/roster" target="_blank">
                    <Abundo name="plus-circle" />
                  </a>
                </div>
                <div className="col-lg-3 col-6 ">
                  <a data-tooltip="Context: Info on timezone | Fontawesome" data-placement="bottom" href="https://transfers.abundo.osp.tech/plans" target="_blank">
                    <Abundo name="info-circle" />
                  </a>
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Check Review Status | Fontawesome" data-placement="bottom" href="https://fraud.abundo.osp.tech/#!/reviewed" target="_blank">
                  <Abundo name="check-circle" />
                </a>
                </div>
                <div className="col-lg-3 col-6 ">
                <a data-tooltip="Context: Approve order | Fontawesome" data-placement="bottom" href="https://fraud.abundo.osp.tech/#!/order-details/1104009044639" target="_blank">
                  <Abundo name="check" />
                </a>
                </div>
                <div className="col-lg-3 col-6 ">
                  <a data-tooltip="Context: Vouchers | Fontawesome" data-placement="bottom" href="https://vouchers.abundo.osp.tech/" target="_blank">
                    <Abundo name="database" />
                  </a>
                </div>
                <div className="col-lg-3 col-6 ">
                  <a data-tooltip="Context: New voucher | Fontawesome" data-placement="bottom" href="https://vouchers.abundo.osp.tech/" target="_blank">
                    <AbundoRegular name="file" />
                  </a>
                </div>
              </div>
              
            </div>
          </section>

          <section className="iconsBlock">
            <div className="container">
            <h2>Abundo (Custom)</h2>
              <div className="row justify-content-md-center">
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Home OSP | Custom" data-placement="bottom" href="https://home.abundo.osp.tech/" target="_blank">
                  <div className="icon">
                    <img src={require('../images/home-osp.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Late Back (Warnings) | Custom" data-placement="bottom" href="https://logistics.abundo.osp.tech/day-view" target="_blank">
                  <div className="icon">
                    <img src={require('../images/late-back.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Marshall Store | Custom" data-placement="bottom" href="https://rosters.abundo.osp.tech/in-store/roster" target="_blank">
                  <div className="icon">
                    <img src={require('../images/marshall_store.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Early Delivery (Warnings) | Custom" data-placement="bottom" href="https://logistics.abundo.osp.tech/day-view" target="_blank">
                  <div className="icon">
                    <img src={require('../images/early-orders.svg')} width="56" />
                  </div>
                </a>
                </div>
              </div>
              <div className="row justify-content-md-left">
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Vehicle Loader Store | Custom" data-placement="bottom" href="https://rosters.abundo.osp.tech/in-store/roster" target="_blank">
                  <div className="icon">
                    <img src={require('../images/vehicle_loader_store.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Picker Store | Custom" data-placement="bottom" href="https://rosters.abundo.osp.tech/in-store/roster" target="_blank">
                  <div className="icon">
                    <img src={require('../images/picker_store.svg')} width="56" />
                  </div>
                </a>
                </div>
              </div>
            </div>
          </section>

          <section className="iconsBlock">
            <div className="container">
            <h2>Store Pick (Menu Icons)</h2>
              <div className="row justify-content-md-center">
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Barcode | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/menu-icons/barcode.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Clear Cart | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/menu-icons/clear_cart.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Container | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/menu-icons/container.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Frame | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/menu-icons/frame.svg')} width="56" />
                  </div>
                </a>
                </div>
              </div>
              <div className="row justify-content-md-left">
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Link | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/menu-icons/link.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Log Out | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/menu-icons/logout.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Management | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/menu-icons/management.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Route | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/menu-icons/route.svg')} width="56" />
                  </div>
                </a>
                </div>
              </div>
              <div className="row justify-content-md-left">
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Search | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/menu-icons/search.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Settings | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/menu-icons/settings.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Van | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/menu-icons/van.svg')} width="56" />
                  </div>
                </a>
                </div>
              </div>
            </div>
          </section>

          <section className="iconsBlock">
            <div className="container">
            <h2>Store Pick (Screen Icons)</h2>
              <div className="row justify-content-md-center">
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Warning | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/screen-icons/warning.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Accept | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/screen-icons/accept.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Error | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/screen-icons/error.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Info | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/screen-icons/info.svg')} width="56" />
                  </div>
                </a>
                </div>
              </div>
              <div className="row justify-content-md-left">
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Scan Barcode | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/screen-icons/scanbarcode.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Scan Buffer | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/screen-icons/scanbuffer.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Scan Container | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/screen-icons/scancontainer.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Scan Frame | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/screen-icons/scanframe.svg')} width="56" />
                  </div>
                </a>
                </div>
              </div>
              <div className="row justify-content-md-left">
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Scan Trolley | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/screen-icons/scantrolley.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Scan Vehicle | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/screen-icons/scanvehicle.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Scan | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/store_pick/screen-icons/scan.svg')} width="56" />
                  </div>
                </a>
                </div>
              </div>
            </div>
          </section>

          <section className="iconsBlock">
            <div className="container">
            <h2>Click &amp; Collect</h2>
              <div className="row justify-content-md-left">
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Plug | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/click_collect/Plug.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Wifi | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/click_collect/Wifi.svg')} width="56" />
                  </div>
                </a>
                </div>
              </div>
              </div>
          </section>

          <section className="iconsBlock">
            <div className="container">
            <h2>Delivery</h2>
              <div className="row justify-content-md-left">
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Ambient | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/delivery/ambient.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Chill | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/delivery/chill.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Frozen | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/delivery/frozen.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Check if customer is 25 years old | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/delivery/check-25-blue.svg')} width="56" />
                  </div>
                </a>
                </div>
              </div>
              <div className="row justify-content-md-left">
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Container | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/delivery/container-blue.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Missing Items | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/delivery/missing-items-blue.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Products | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/delivery/products-blue.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Confirm | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/delivery/tick-color.svg')} width="56" />
                  </div>
                </a>
                </div>
              </div>
              <div className="row justify-content-md-left">
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: Cancel | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/delivery/cross-color.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: ? | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/delivery/triangle.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: ? | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/delivery/circle.svg')} width="56" />
                  </div>
                </a>
                </div>
                <div className="col-lg-3 col-6">
                <a data-tooltip="Context: ? | Custom" data-placement="bottom" href="#">
                  <div className="icon">
                    <img src={require('../images/delivery/square.svg')} width="56" />
                  </div>
                </a>
                </div>
              </div>
              </div>
          </section>
          
        </div>
      </Layout>
    )
  }
}

export default Icons