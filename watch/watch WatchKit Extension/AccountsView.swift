//
//  AccountsView.swift
//  watch WatchKit Extension
//
//  Created by Gerson Alexander Pardo Gamez on 8/2/19.
//  Copyright © 2019 Gerson Alexander Pardo Gamez. All rights reserved.
//

import SwiftUI
import Safebox

struct AccountsView: View {
    
    let host: AccountsController!
    @State var accounts = SafeboxAccountSingleCollection()
    @State var total = 0
    
    var body: some View {
        
        List {
            if (self.total>0){
                ForEach(0..<self.total) { index in
                NavigationLink(destination: AccountView(account: self.accounts.at(index)!)) {
                    AccountView(account: self.accounts.at(index)!)
                }
                       }
            }
        
            }.onAppear(
                perform: {
                        do{
                            let response = try Client.connect().getAccounts()
            
                            self.accounts  = response
                            self.total = self.accounts.count()
                            
                        }catch let e {
                            print("error \(e.localizedDescription)")
                        }

            }
        ).navigationBarTitle(Text("Accounts"))
    }
}



#if DEBUG
struct AccountsView_Previews: PreviewProvider {
    
    static func  account() -> SafeboxAccountSingle {
        let account = SafeboxAccountSingle()
        account.username = "username454"
        account.label = "Facebook Account"
        account.hint = "Same gmail password"
        return account
    }
    
    static func  accounts() -> SafeboxAccountSingleCollection {
        let accounts = SafeboxAccountSingleCollection()
   
        for index in 0..<20 {
            accounts.insert(index, n: account())
        }
        return accounts
    }
    
    static var previews: some View {
        AccountsView(host: nil, accounts: accounts(),total: 10)
    }
}
#endif
