//
//  ContentView.swift
//  watch WatchKit Extension
//
//  Created by Gerson Alexander Pardo Gamez on 8/2/19.
//  Copyright © 2019 Gerson Alexander Pardo Gamez. All rights reserved.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        ScrollView {
         VStack {
               Text("SafeBox")
                   TextField("Username", text: /*@START_MENU_TOKEN@*/.constant("")/*@END_MENU_TOKEN@*/)
                   TextField("Password", text: /*@START_MENU_TOKEN@*/.constant("")/*@END_MENU_TOKEN@*/)
                   Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/) {
                   Text("Sign In")
                   }
               }        }
       
    }
}

#if DEBUG
struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
#endif
